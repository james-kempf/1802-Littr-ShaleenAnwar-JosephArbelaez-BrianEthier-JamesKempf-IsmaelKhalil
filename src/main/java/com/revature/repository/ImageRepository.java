package com.revature.repository;

import java.util.List;

import com.revature.model.Cat;
import com.revature.model.Image;

public interface ImageRepository {

	void insertImage(Image image);
	void deleteImage(Image image);
	void setProfilePic(Cat cat, Image image);
	List<Image> selectAllImagesByCat(Cat cat);
	
}
