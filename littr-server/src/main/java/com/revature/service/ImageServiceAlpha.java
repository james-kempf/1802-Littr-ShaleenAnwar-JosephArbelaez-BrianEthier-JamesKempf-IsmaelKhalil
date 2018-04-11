package com.revature.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.revature.model.Cat;
import com.revature.model.Image;
import com.revature.repository.ImageRepository;

public class ImageServiceAlpha implements ImageService {

	private static Logger logger = Logger.getLogger(CatServiceAlpha.class);

	@Autowired
	public ImageRepository imageRepository;

	public ImageServiceAlpha() {}

	@Override
	public boolean insertImage(Image image) {
		logger.trace("ImageServiceAlpha.insertImage");
		imageRepository.insertImage(image);
		if(image.getId() != 0){
			logger.trace("ImageServiceAlpha.insertImage - Sucess!");
			return true;
		}
		logger.trace("ImageServiceAlpha.insertImage - Failure!");
		return false;
	}

	@Override
	public boolean deleteImage(Image image) {
		logger.trace("ImageServiceAlpha.deleteImage");
		imageRepository.deleteImage(image);
		if (imageRepository.getImageById(image.getId()) == null){
			return true;
		}
		return false;
	}

	@Override
	public boolean setProfilePic(Cat cat, Image image) {
		cat.setProfilePic(image);
		imageRepository.setProfilePic(cat);

		if(cat.getProfilePic().equals(image)){
			return false;
		}
		return true;
	}

	@Override
	public List<Image> selectAllImagesByCat(Cat cat) {
		return (List<Image>) imageRepository.getImageById(cat.getId());
	}

}
