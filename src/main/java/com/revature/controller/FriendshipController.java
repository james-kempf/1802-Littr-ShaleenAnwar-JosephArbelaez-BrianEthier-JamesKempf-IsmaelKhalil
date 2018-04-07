package com.revature.controller;

import com.revature.ajax.ClientMessage;
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
	public abstract ClientMessage approveFriendship(Friendship friendship);
	
	/**
	 * Deny friend request
	 */
	public abstract ClientMessage denyFriendship(Friendship friendship);
}
