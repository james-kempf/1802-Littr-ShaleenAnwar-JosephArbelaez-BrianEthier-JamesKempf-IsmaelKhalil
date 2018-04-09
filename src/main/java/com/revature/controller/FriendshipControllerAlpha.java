package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.model.Cat;
import com.revature.model.Friendship;
import com.revature.service.FriendshipService;
import com.revature.util.ClientMessageUtil;

@Controller("frienshipController")
@CrossOrigin(origins = "https://localhost:4200")
public class FriendshipControllerAlpha implements FriendshipController {

	@Autowired
	FriendshipService friendshipService;

	@Override
	@GetMapping("/all-friendships")
	public @ResponseBody Object getAllFriendships() {
		// TODO Implement authentication
		boolean loggedin = true;
		if (!loggedin) {
			return "login.html";
		}
		else {
			Cat cat = new Cat();
			try {
				return friendshipService.findAllFriendships(cat);
			} catch (Exception e) {
				return ClientMessageUtil.SOMETHING_WRONG;
			}
		}
	}

	@Override
	@GetMapping("/all-friends")
	public @ResponseBody Object getAllFriends() {
		// TODO Implement authentication
		boolean loggedin = true;
		if (!loggedin) {
			return "login.html";
		}
		else {
			Cat cat = new Cat();
			try {
				return friendshipService.findAllFriends(cat);
			} catch (Exception e) {
				return ClientMessageUtil.SOMETHING_WRONG;
			}
		}
	}

	@Override
	@PostMapping("apprive-friendship")
	public @ResponseBody Object approveFriendship(@RequestBody Friendship friendship) {
		// TODO Implement authentication
		boolean loggedin = true;
		if (!loggedin) {
			return "login.html";
		}
		else {
			if (friendshipService.approveFriendship(friendship)) {
				return ClientMessageUtil.FRIENDSHIP_APPROVED;
			}
		}
		return ClientMessageUtil.SOMETHING_WRONG;
	}

	@Override
	@PostMapping("delete-friendship")
	public @ResponseBody Object deleteFriendship(@RequestBody Friendship friendship) {
		// TODO Implement authentication
		boolean loggedin = true;
		if (!loggedin) {
			return "login.html";
		}
		else {
			if(friendshipService.deleteFriendship(friendship)) {
				return ClientMessageUtil.FRIENDSHIP_DELETED;
			}
		}
		return ClientMessageUtil.SOMETHING_WRONG;
	}

	@Override
	public boolean isFriends(Cat catA, Cat catB) {
		//TODO implement authentication
		return friendshipService.findFriendshipByCat(catA, catB);
	}

}
