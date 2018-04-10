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
	public void insertPasswordToken(PasswordToken passwordToken) {
		sessionFactory.getCurrentSession().save(passwordToken);
	}

	@Override
	public void deletePasswordToken(PasswordToken passwordToken) {
		sessionFactory.getCurrentSession().delete(passwordToken);
	}

	@Override
	public boolean updatePassword(PasswordToken passwordToken, String newPassword) {
		Cat cat = passwordToken.getCat();
		PasswordToken storedPasswordToken = (PasswordToken) sessionFactory.getCurrentSession().createCriteria(PasswordToken.class)
				.add(Restrictions.eq("cat", cat))
				.uniqueResult();
		if (passwordToken.getToken().equals(storedPasswordToken.getToken())) {
			cat = (Cat) sessionFactory.getCurrentSession().createCriteria(Cat.class)
				.add(Restrictions.eq("id", cat.getId()))
				.uniqueResult();
			cat.setPassword(newPassword);
			sessionFactory.getCurrentSession().saveOrUpdate(cat);
			return true;
		}
		return false;
	}

}
