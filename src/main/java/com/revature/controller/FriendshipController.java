package com.revature.controller;

import java.util.List;

import com.revature.model.Cat;
import com.revature.model.Friendship;

public interface FriendshipController {

	/**
	 * Get all friends of current user
	 */
	public abstract List<Cat> getAllFriends();
	
	/**
	 * Approve friend request
	 */
	public abstract boolean approveFriendship(Friendship friendship);
	
	/**
	 * Deny friend request
	 */
	public abstract boolean denyFriendship(Friendship friendship);
}
