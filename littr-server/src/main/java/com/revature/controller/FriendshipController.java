package com.revature.controller;

import java.util.List;

import com.revature.model.Cat;
import com.revature.model.Friendship;

public interface FriendshipController {
	
	/**
	 * Inserts a new friendship between two cats
	 */
	public abstract Object insertFriendship(List<Cat> cats);
	
	/**
	 * Get all friendships of current user
	 * Returns list if successful, error ClientMessage if not
	 */
	public abstract Object getAllFriendships();

	/**
	 * Get all friends of current user
	 * Returns list if successful, error ClientMessage if not
	 */
	public abstract Object getAllFriends();
	
	/**
	 * find out if catA and catB are friends
	 * @param catA
	 * @param catB
	 * @return
	 */
	public abstract boolean isFriends(Cat catA, Cat catB);
	
	/**
	 * Approve friend request
	 */
	public abstract Object approveFriendship(Friendship friendship);
	
	/**
	 * Deletes a friendship
	 */
	public abstract Object deleteFriendship(Friendship friendship);
}
