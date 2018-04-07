package com.revature.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revature.model.Post;
@Repository("postRepository")
@Transactional
public class PostRepositoryHibernate implements PostRepository {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public PostRepositoryHibernate() {
	}
	
	@Override
	public void save(Post post) {
		sessionFactory.getCurrentSession().save(post);
	}

	@Override
	public void update(Post post) {
		sessionFactory.getCurrentSession().update(post);
	}
	
	@Override
	public void delete(Post post) {
		sessionFactory.getCurrentSession().delete(post);
	}

	@Override
	public Post selectSinglePost(int id) {
		
			return ((Post) sessionFactory.getCurrentSession().createCriteria(Post.class)
					.add(Restrictions.idEq(id))
					.uniqueResult());
		
	}

	@Override
	public List<Post> selectAll() {
		return sessionFactory.getCurrentSession().createCriteria(Post.class).list();
	}

	@Override
	public List<Post> selectUserPosts(int catId) {
		try {
			return sessionFactory.getCurrentSession().createCriteria(Post.class)
					.add(Restrictions.idEq(catId))
					.list();
		} catch (IndexOutOfBoundsException e) {
			return null;
		}
	}
}
