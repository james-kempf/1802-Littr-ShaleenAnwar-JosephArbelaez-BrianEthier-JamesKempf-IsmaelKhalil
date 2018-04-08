package com.revature.repository;

import java.util.List;

import org.hibernate.SQLQuery;

import com.revature.model.Cat;

public interface CatRepository {

	public abstract void save(Cat cat);

	public abstract void update(Cat cat);

	public abstract List<Cat> findAllUsers();

	public abstract Cat findByName(String name);

	public abstract Cat findById(int id);

	public abstract List<Cat> findByNameLike(String pattern);

	public abstract SQLQuery getPasswordHash(Cat cat);

	public abstract List<Cat> findAllFriends(Cat cat);
}