package com.revature.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revature.model.Cat;
import com.revature.model.Post;
@Repository("postRepository")
@Transactional
public class PostRepositoryHibernate implements PostRepository {

	private static Logger logger = Logger.getLogger(PostRepositoryHibernate.class);
	
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
	public void deletePost(Post post) {
		sessionFactory.getCurrentSession().delete(post);
		
	}

	@Override
	public Post selectSinglePost(int id) {

		return ((Post) sessionFactory.getCurrentSession().createCriteria(Post.class)
				.add(Restrictions.idEq(id))
				.uniqueResult());
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Post> selectAll() {
		return sessionFactory.getCurrentSession().createCriteria(Post.class).list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Post> selectUserPosts(Cat cat) {
		try {
			logger.info("selectuserposts. cat id: " + cat);
			return sessionFactory.getCurrentSession().createCriteria(Post.class)
					.add(Restrictions.like("poster", cat))
					.list();
		} catch (IndexOutOfBoundsException e) {
			return null;
		}
	}
}
