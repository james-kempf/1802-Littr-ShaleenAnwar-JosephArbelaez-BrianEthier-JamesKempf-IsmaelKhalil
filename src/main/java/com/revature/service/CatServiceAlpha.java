package com.revature.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.revature.model.Cat;
import com.revature.repository.CatRepository;

public class CatServiceAlpha implements CatService {
	
	private static Logger logger = Logger.getLogger(CatServiceAlpha.class);
	@Autowired
	public CatRepository catRepository;
	
	public CatServiceAlpha() {}


	@Override
	public boolean insertCat(Cat cat) {
		catRepository.save(cat);
		return cat.getId() != 0;
	}


	@Override
	public Cat authenticate(Cat cat) {
	    {
	    	Cat loggedCat = catRepository.findByName(cat.getUsername().toUpperCase());

	    	if ( loggedCat.getPassword().equals(catRepository.getPasswordHash(cat)))
	    	{
	    	    return loggedCat;
	    	}
	    	return null;
	        }
	}

	@Override
	public Cat findCat(Cat cat) {
		return catRepository.findById(cat.getId());
	}

	@Override
	public List<Cat> findCatByName(String name) {
		return (List<Cat>) catRepository.findByName(name);
	}

	@Override
	public List<Cat> findAllCats() {
		return catRepository.findAllUsers();
	}


	@Override
	public List<Cat> findAllFriends(Cat cat) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public boolean updateCat(Cat cat) {
		catRepository.update(cat);
		return cat.getId() != 0;
	}

}
