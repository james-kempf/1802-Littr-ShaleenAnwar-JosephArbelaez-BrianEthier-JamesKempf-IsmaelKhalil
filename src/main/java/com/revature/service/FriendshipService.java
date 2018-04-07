package com.revature.service;

import java.util.List;

import com.revature.model.Cat;
import com.revature.model.Friendship;

public interface FriendshipService {
	
	/**
	 * Returns a list of Friendships of the given cat
	 */
	public abstract List<Friendship> findAllFriendships(Cat cat);
 
	/**
	 * Returns all friends of the given cat
	 */
	public abstract List<Cat> findAllFriends(Cat cat);
	
	/**
	 * Approve friend request
	 */
	public abstract boolean approveFriendship(Friendship friendship);
	
	/**
	 * Deny friend request
	 */
	public abstract boolean denyFriendship(Friendship friendship);
}
