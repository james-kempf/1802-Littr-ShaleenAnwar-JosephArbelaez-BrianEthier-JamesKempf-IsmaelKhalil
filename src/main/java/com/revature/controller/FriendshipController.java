package com.revature.controller;

import com.revature.model.Friendship;

public interface FriendshipController {
	
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
	 * Approve friend request
	 */
	public abstract Object approveFriendship(Friendship friendship);
	
	/**
	 * Deletes a friendship
	 */
	public abstract Object deleteFriendship(Friendship friendship);
}
