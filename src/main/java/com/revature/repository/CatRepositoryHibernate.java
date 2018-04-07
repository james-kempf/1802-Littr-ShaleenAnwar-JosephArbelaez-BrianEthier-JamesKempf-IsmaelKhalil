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
					.add(Restrictions.like("name", name))
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
	public SQLQuery getPasswordHash(Cat cat) {
		String sql = "SELECT GET_HASH(?) AS HASH FROM DUAL";
		return sessionFactory.getCurrentSession().createSQLQuery(sql);
		//Using SQLQuery until we add the proper Hibernate Query
	}
}
