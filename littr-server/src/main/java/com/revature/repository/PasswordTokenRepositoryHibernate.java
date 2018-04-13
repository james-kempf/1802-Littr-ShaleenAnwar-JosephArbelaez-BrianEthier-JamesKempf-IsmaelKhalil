package com.revature.repository;

import javax.transaction.Transactional;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revature.model.Cat;
import com.revature.model.PasswordToken;

@Repository("passwordTokenRepository")
@Transactional
public class PasswordTokenRepositoryHibernate implements PasswordTokenRepository {
	
	private static Logger logger = Logger.getLogger(PasswordTokenRepositoryHibernate.class);
	
	@Autowired
	SessionFactory sessionFactory;

	@Override
	public PasswordToken selectPasswordToken(Cat cat) {
		logger.info("Selecting PasswordToken");
		return (PasswordToken) sessionFactory.getCurrentSession().createCriteria(PasswordToken.class)
				.add(Restrictions.eqOrIsNull("cat", cat))
				.uniqueResult();
	}

	@Override
	public boolean insertPasswordToken(PasswordToken passwordToken) {
		logger.info(passwordToken.toString());
		try {
			passwordToken.setCat(
					(Cat) sessionFactory.getCurrentSession().createCriteria(Cat.class)
					.add(Restrictions.eq("email", passwordToken.getCat().getEmail()))
					.list()
					.get(0)
					);
		} catch (Exception e) {
			logger.info("cat not found");
			return false;
		}
		sessionFactory.getCurrentSession().saveOrUpdate(passwordToken);
		return true;
	}

	@Override
	public void deletePasswordToken(PasswordToken passwordToken) {
		sessionFactory.getCurrentSession().delete(passwordToken);
	}

	@Override
	public boolean updatePassword(PasswordToken passwordToken, String newPassword) {
		Cat cat = new Cat();
		try {
			cat = (Cat) sessionFactory.getCurrentSession().createCriteria(Cat.class)
					.add(Restrictions.eq("email", passwordToken.getCat().getEmail()))
					.list()
					.get(0);
		} catch (Exception e) {
			return false;
		}
		PasswordToken storedPasswordToken = (PasswordToken) sessionFactory.getCurrentSession().createCriteria(PasswordToken.class)
				.add(Restrictions.eq("cat", cat))
				.uniqueResult();
		if (passwordToken.getToken().equals(storedPasswordToken.getToken())) {
			cat.setPassword(newPassword);
			sessionFactory.getCurrentSession().saveOrUpdate(cat);
			return true;
		}
		return false;
	}

}
