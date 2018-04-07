package com.revature.service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Cat;
import com.revature.model.PasswordToken;
import com.revature.repository.PasswordTokenRepository;

@Service("passwordTokenService")
public class PasswordTokenServiceAlpha implements PasswordTokenService {

	private static Logger logger = Logger.getLogger(PasswordTokenServiceAlpha.class);

	@Autowired
	SessionFactory sessionFactory;

	@Autowired
	PasswordTokenRepository passwordTokenRepository;

	@Override
	public PasswordToken selectPasswordToken(Cat cat) {
		return passwordTokenRepository.selectPasswordToken(cat);
	}

	@Override
	public boolean insertPasswordToken(Cat cat) {
		final int prime = 31;
		int result = 1;
		String token = prime * result + (cat.hashCode() + LocalDateTime.now().toString());
		PasswordToken passwordToken = new PasswordToken(cat, token);
		passwordTokenRepository.insertPasswordToken(passwordToken);
		
		String emailFrom = "littr.service@gmail.com";
		String emailFromPassword = "77lPk#3h!sb2t4m";
		String emailTo = cat.getEmail();
		String emailSubject = "Reset Your Password";
		String emailBody = "Please use below link to reset your password.\n"
                +"littr.com/password-recover?id="+cat.getId()+"&token="+passwordToken.getToken();

		Properties properties = new Properties();
		properties.put("mail.smtp.host", "smtp.gmail.com"); // SMTP Host
		properties.put("mail.smtp.port", "587"); // TLS Port
		properties.put("mail.smtp.auth", "true"); // enable authentication
		properties.put("mail.smtp.starttls.enable", "true"); // enable STARTTLS

		// create Authenticator object to pass in Session.getInstance argument
		Authenticator authenticator = new Authenticator() {
			// override the getPasswordAuthentication method
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(emailFrom, emailFromPassword);
			}
		};
		Session session = Session.getInstance(properties, authenticator);

		try {
			MimeMessage msg = new MimeMessage(session);
			//set message headers
			msg.addHeader("Content-type", "text/HTML; charset=UTF-8");
			msg.addHeader("format", "flowed");
			msg.addHeader("Content-Transfer-Encoding", "8bit");
			msg.setFrom(new InternetAddress("no_reply@littr.com", "NoReply-Littr"));
			msg.setReplyTo(InternetAddress.parse("no_reply@littr.com", false));
			msg.setSubject(emailSubject, "UTF-8");
			msg.setText(emailBody, "UTF-8");
			msg.setSentDate(new Date());

			msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailTo, false));
			logger.info("Message is ready");
			Transport.send(msg);  

			logger.info("Email Sent Successfully");
			return true;
		}
		catch (Exception e) {
			return false;
		}
	}

	@Override
	public boolean deletePasswordToken(Cat cat) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean resetPassword(Cat cat) {
		// TODO Auto-generated method stub
		return false;
	}

}
