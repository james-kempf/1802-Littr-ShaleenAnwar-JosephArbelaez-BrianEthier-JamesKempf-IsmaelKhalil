package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.ajax.ClientMessage;
import com.revature.model.Cat;
import com.revature.model.Friendship;
import com.revature.service.FriendshipService;
import com.revature.util.ClientMessageUtil;

public class FriendshipControllerAlpha implements FriendshipController {
	
	@Autowired
	FriendshipService friendshipService;

	@Override
	public Object getAllFriendships() {
		// TODO Implement authentication
		if (true) {
			Cat cat = new Cat();
			return friendshipService.findAllFriendships(cat);
		}
		return ClientMessageUtil.SOMETHING_WRONG;
	}

	@Override
	public Object getAllFriends() {
		// TODO Implement authentication
		if (true) {
			Cat cat = new Cat();
			return friendshipService.findAllFriends(cat);
		}
		return ClientMessageUtil.SOMETHING_WRONG;
	}

	@Override
	public ClientMessage approveFriendship(Friendship friendship) {
		// TODO Implement authentication
		if (true) {
			friendshipService.approveFriendship(friendship);
		}
		return ClientMessageUtil.SOMETHING_WRONG;
	}

	@Override
	public ClientMessage denyFriendship(Friendship friendship) {
		// TODO Implement authentication
		if (true) {
			friendshipService.denyFriendship(friendship);
		}
		return ClientMessageUtil.SOMETHING_WRONG;
	}

	@Override
	public boolean isFriends(Cat catA, Cat catB) {
		//TODO implement authentication
		return friendshipService.findFriendshipByCat(catA, catB);
	}

}
