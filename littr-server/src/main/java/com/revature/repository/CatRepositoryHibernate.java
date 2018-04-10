package com.revature.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.apache.log4j.Logger;
import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revature.model.Cat;

@Repository("catRepository")
@Transactional
public class CatRepositoryHibernate implements CatRepository {
	
	private static Logger logger = Logger.getLogger(CatRepositoryHibernate.class);
	
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public void save(Cat cat) {
		logger.info(cat.toString());
		sessionFactory.getCurrentSession().save(cat);
	}
	
	@Override
	public void update(Cat cat) {

		sessionFactory.getCurrentSession().update(cat);
		//Hibernate: update cat set username=?, password=?, catName=?, email=?, bio=?, image=? where id=?
	}


	@SuppressWarnings("unchecked")
	@Override
	public List<Cat> findAllUsers() {
		return sessionFactory.getCurrentSession().createCriteria(Cat.class).list();
	}

	@Override
	public Cat findByName(String name) {
		try {
			return (Cat) sessionFactory.getCurrentSession().createCriteria(Cat.class)
					.add(Restrictions.like("username", name))
					.list()
					.get(0);
		} catch (IndexOutOfBoundsException e) {
			return null;
		}
	}


	@Override
	public Cat findById(int id) {
		try {
			return (Cat) sessionFactory.getCurrentSession().createCriteria(Cat.class)
					.add(Restrictions.idEq(id))
					.list()
					.get(0);
		} catch (IndexOutOfBoundsException e) {
			return null;
		}
	}

	@Override
	public List<Cat> findByNameLike(String pattern) {
	       return (List<Cat>) sessionFactory.getCurrentSession().createCriteria(Cat.class)
	               .add(Restrictions.like("name", pattern)).list();
	}
	
	@Override
	public List<Cat> findAllFriends(Cat cat) {
		return (List<Cat>) sessionFactory.getCurrentSession().createCriteria(Cat.class)
				.add(Restrictions.like("friends", cat)).list();
	}

	@Override
	public String getPasswordHash(Cat cat) {
		String sql = "SELECT GET_HASH(:password) AS HASH FROM DUAL";
		return (String) sessionFactory.getCurrentSession().createSQLQuery(sql)
				.setParameter("password", cat.getPassword())
				.uniqueResult();
		//Using SQLQuery until we add the proper Hibernate Query
	}

	@Override
	public Cat findByUsername(Cat cat) {
		try {
			return (Cat) sessionFactory.getCurrentSession().createCriteria(Cat.class)
					.add(Restrictions.like("username", cat.getUsername()))
					.list()
					.get(0);
		} catch (IndexOutOfBoundsException e) {
			return null;
		}
	}
}
