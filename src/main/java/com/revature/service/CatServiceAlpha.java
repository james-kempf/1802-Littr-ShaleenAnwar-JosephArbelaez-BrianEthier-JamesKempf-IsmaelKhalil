package com.revature.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Cat;
import com.revature.model.Friendship;
import com.revature.repository.CatRepository;

@Service("catService")
public class CatServiceAlpha implements CatService {
	
	private static Logger logger = Logger.getLogger(CatServiceAlpha.class);
	
	@Autowired
	private CatRepository catRepository;

	@Override
	public boolean insertCat(Cat cat) {
		logger.trace("Inerting Cat");
		catRepository.save(cat);
		return cat.getId() != 0;
	}

	@Override
	public boolean updateCat(Cat cat) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Cat findCat(Cat cat) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Cat> findCatByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Cat> findAllCats() {
		// TODO Auto-generated method stub
		return null;
	}
}
