package com.revature.repository;

import java.util.List;

import com.revature.model.Cat;
import com.revature.model.Friendship;

public interface FriendshipRepository {

	/**
	 * Returns a list of Cats the the given cat is a friend of
	 */
	public abstract List<Cat> findAllFriends(Cat cat);
	
	/**
	 * Set FriendStatus to approved, returns if successful
	 */
	public abstract boolean approveFriendship(Friendship friendship);
	
	/**
	 * Set FriendStatus to denied, returns if successful
	 */
	public abstract boolean denyFriendship(Friendship friendship);
}
