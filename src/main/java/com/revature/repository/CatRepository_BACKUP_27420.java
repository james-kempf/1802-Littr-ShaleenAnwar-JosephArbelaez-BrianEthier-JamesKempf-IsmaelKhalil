package com.revature.repository;

import java.util.List;

import org.hibernate.SQLQuery;

import com.revature.model.Cat;
import com.revature.model.Friendship;

public interface CatRepository {
<<<<<<< HEAD
	void save(Cat cat); 
	void update(Cat cat);
	List<Cat> findAllUsers();
	Cat findByName(String name);
	Cat findById(int id);
	List<Cat> findAllFriends(Cat cat);
	
	List<Cat> findByNameLike(String pattern);
	
	SQLQuery getPasswordHash(Cat cat);
=======
	
	public abstract void save(Cat cat);
	
	public abstract void update(Cat cat);
	
	public abstract List<Cat> findAllUsers();
	
	public abstract Cat findByName(String name);
	
	public abstract Cat findById(int id);
	
	public abstract List<Cat> findByNameLike(String pattern);
>>>>>>> development
}