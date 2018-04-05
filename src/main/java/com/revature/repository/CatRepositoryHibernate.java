package com.revature.repository;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import com.revature.model.Cat;

public class CatRepositoryHibernate implements CatRepository {
	
	private static Logger logger = Logger.getLogger(CatRepositoryHibernate.class);
	@Autowired
	private SessionFactory sessionFactory;
	
	public CatRepositoryHibernate() {
		logger.trace("Injecting session factory bean.");
	}	

	@Override
	public void save(Cat cat) {
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
					.add(Restrictions.eq("name", name))
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
		try {
			return (List<Cat>) sessionFactory.getCurrentSession().createCriteria(Cat.class)
					.add(Restrictions.like("pattern", pattern))
					.list()
					.get(0);
		} catch (IndexOutOfBoundsException e) {
			return null;
		}
	}


	@Override
	public List<Cat> findAllFriends(Cat cat) {
		// Need mapping for this
		return null;
	}
}
