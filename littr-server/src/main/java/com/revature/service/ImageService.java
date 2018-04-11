package com.revature.service;

import java.util.List;

import com.revature.model.Cat;
import com.revature.model.Image;

public interface ImageService {
	
	public  boolean insertImage(Image image);
	public  boolean deleteImage(Image image);
	public  boolean setProfilePic(Cat cat, Image image);
	public  List<Image> selectAllImagesByCat(Cat cat);
}
