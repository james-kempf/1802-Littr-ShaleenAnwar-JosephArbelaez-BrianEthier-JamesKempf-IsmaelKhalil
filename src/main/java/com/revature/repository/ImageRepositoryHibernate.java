package com.revature.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.apache.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.revature.model.Cat;
import com.revature.model.Image;

@Repository("imageRepository")
@Transactional
public class ImageRepositoryHibernate implements ImageRepository {

	private static Logger logger = Logger.getLogger(FriendshipRepositoryHibernate.class);

	private SessionFactory sessionFactory;

	@Override
	public void insertImage(Image image) {
		sessionFactory.getCurrentSession().save(image);
	}

	@Override
	public Image getImageById(int id) {
		try {
			return (Image) sessionFactory.getCurrentSession().createCriteria(Image.class)
					.add(Restrictions.idEq(id))
					.list()
					.get(0);
		} catch (IndexOutOfBoundsException e) {
			return null;
		}
	}

@Override
public void deleteImage(Image image) {
	sessionFactory.getCurrentSession().delete(image);
}

@Override
public void setProfilePic(Cat cat) {
	sessionFactory.getCurrentSession().update(cat);
}

@SuppressWarnings("unchecked")
@Override
public List<Image> selectAllImagesByCat(Cat cat) {
	try {
		return (List<Image>) sessionFactory.getCurrentSession().createCriteria(Image.class)
				.add(Restrictions.eq("I_CAT_ID", cat.getId()))
				.list();
	} catch (IndexOutOfBoundsException e) {
		return null;
	}
}
}
