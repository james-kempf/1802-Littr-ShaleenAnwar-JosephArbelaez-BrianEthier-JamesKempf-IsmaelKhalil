package com.revature.repository;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revature.model.Cat;
import com.revature.model.FriendStatus;
import com.revature.model.Friendship;

@Repository("friendshipRepository")
@Transactional
public class FriendshipRepositoryHibernate implements FriendshipRepository {
	
	private static Logger logger = Logger.getLogger(FriendshipRepositoryHibernate.class);
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public boolean insertFriendship(Friendship friendship) {
		// TODO Auto-generated method stub
		return true;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Friendship> findAllFriendships(Cat cat) {
		logger.info("Getting all friendships for " + cat.toString());
		List<Friendship> listA = sessionFactory.getCurrentSession().createCriteria(Friendship.class)
				.add(Restrictions.eq("catA", cat))
				.list();
		List<Friendship> listB = sessionFactory.getCurrentSession().createCriteria(Friendship.class)
				.add(Restrictions.eq("catB", cat))
				.list();
		listA.addAll(listB);
		return listA;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Cat> findAllFriends(Cat cat) {
		logger.info("Getting all friends for " + cat.toString());
		List<Friendship> listA = sessionFactory.getCurrentSession().createCriteria(Friendship.class)
				.add(Restrictions.eq("catA", cat))
				.list();
		List<Friendship> listB = sessionFactory.getCurrentSession().createCriteria(Friendship.class)
				.add(Restrictions.eq("catB", cat))
				.list();
		List<Cat> friendList = new ArrayList<>();
		for (Friendship friendship: listA) {
			friendList.add(friendship.getCatB());
		}
		for (Friendship friendship: listB) {
			logger.trace(friendship.getCatA());
			friendList.add(friendship.getCatA());
		}
		return friendList;
	}

	@Override
	public boolean approveFriendship(Friendship friendship) {
		friendship.setStatus(new FriendStatus(2, "APPROVED"));
		sessionFactory.getCurrentSession().update(friendship);
		return true;
	}

	@Override
	public boolean deleteFriendship(Friendship friendship) {
		sessionFactory.getCurrentSession().delete(friendship);
		return true;
	}

	

	
}
