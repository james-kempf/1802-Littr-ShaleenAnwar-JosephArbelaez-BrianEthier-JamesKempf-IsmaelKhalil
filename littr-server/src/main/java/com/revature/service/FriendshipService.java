package com.revature.service;

import java.util.List;

import com.revature.model.Cat;
import com.revature.model.Friendship;

public interface FriendshipService {
	
	
	
	/**
	 * Insert new friendship
	 */
	public boolean insertFriendship(Friendship friendship);
	
	/**
	 * Returns a list of Friendships of the given cat
	 */
	public abstract List<Friendship> findAllFriendships(Cat cat);
 
	/**
	 * Returns all friends of the given cat
	 */
	public abstract List<Cat> findAllFriends(Cat cat);
	
	/**
	 * 
	 * @param catA -logged cat
	 * @param catB - possible friend
	 * @return are catA and catB friends?
	 */
	public abstract boolean findFriendshipByCat(Cat catA, Cat catB);
	
	
	
	/**
	 * Approve friend request
	 */
	public abstract boolean approveFriendship(Friendship friendship);
	
	/**
	 * Deny friend request
	 */
	public abstract boolean deleteFriendship(Friendship friendship);
}
