package com.revature.repository;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import com.revature.model.Cat;
import com.revature.model.PasswordToken;

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
	public void insertPasswordToken(PasswordToken passwordToken) {
		sessionFactory.getCurrentSession().save(passwordToken);
	}

	@Override
	public void deletePasswordToken(PasswordToken passwordToken) {
		sessionFactory.getCurrentSession().delete(passwordToken);
	}

}
