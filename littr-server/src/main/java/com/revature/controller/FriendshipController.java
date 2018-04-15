package com.revature.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;
import com.revature.model.Friendship;

public interface FriendshipController {
	
	/**
	 * Inserts a new friendship between two cats
	 */
	public abstract ClientMessage insertFriendship(List<Cat> cats, HttpServletRequest request);
	
	/**
	 * Get all friendships of current user
	 * Returns list if successful, error ClientMessage if not
	 */
	public abstract Object getAllFriendships(HttpServletRequest request);

	/**
	 * Get all friends of current user
	 * Returns list if successful, error ClientMessage if not
	 */
	public abstract Object getAllFriends(HttpServletRequest request);
	
	/**
	 * find out if catA and catB are friends
	 * @param catA
	 * @param catB
	 * @return
	 */
	public abstract boolean isFriends(Cat catA, Cat catB, HttpServletRequest request);
	
	/**
	 * Approve friend request
	 */
	public abstract Object approveFriendship(Friendship friendship, HttpServletRequest request);
	
	/**
	 * Deletes a friendship
	 */
	public abstract Object deleteFriendship(Friendship friendship, HttpServletRequest request);
}
