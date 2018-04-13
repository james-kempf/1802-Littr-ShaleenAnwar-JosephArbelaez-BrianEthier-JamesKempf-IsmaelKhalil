package com.revature.controller;

import java.sql.Timestamp;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.model.Cat;
import com.revature.model.FriendStatus;
import com.revature.model.Friendship;
import com.revature.service.FriendshipService;
import com.revature.util.ClientMessageUtil;

@Controller("frienshipController")
@CrossOrigin(origins = "http://localhost:4200")
public class FriendshipControllerAlpha implements FriendshipController {
	
	private static Logger logger = Logger.getLogger(FriendshipControllerAlpha.class);

	@Autowired
	FriendshipService friendshipService;
	
	@Override
	@PostMapping("/add-friendship")
	public @ResponseBody Object insertFriendship(@RequestBody List<Cat> cats, HttpServletRequest request) {
		Friendship friendship = new Friendship(
				cats.get(0),
				cats.get(1),
				new FriendStatus(
						1,
						"PENDING"
						),
				new Timestamp(System.currentTimeMillis()));
		if (friendshipService.insertFriendship(friendship)) {
			return ClientMessageUtil.INSERT_SUCCESSFUL;
		}
		return ClientMessageUtil.SOMETHING_WRONG;
	}

	@Override
	@GetMapping("/all-friendships")
	public @ResponseBody Object getAllFriendships(HttpServletRequest request) {
		Cat loggedCat = (Cat) request.getSession().getAttribute("loggedCat");
		try {
			return friendshipService.findAllFriendships(loggedCat);
		} catch (Exception e) {
			return ClientMessageUtil.SOMETHING_WRONG;
		}
	}

	@Override
	@GetMapping("/all-friends")
	public @ResponseBody Object getAllFriends(HttpServletRequest request) {
		Cat loggedCat = (Cat) request.getSession().getAttribute("loggedCat");
		try {
			return friendshipService.findAllFriends(loggedCat);
		} catch (Exception e) {
			return ClientMessageUtil.SOMETHING_WRONG;
		}
	}

	@Override
	@PostMapping("approve-friendship")
	public @ResponseBody Object approveFriendship(@RequestBody Friendship friendship, HttpServletRequest request) {
		Cat loggedCat = (Cat) request.getSession().getAttribute("loggedCat");
		if (loggedCat.equals(friendship.getCatA()) || loggedCat.equals(friendship.getCatB())) {
			if (friendshipService.approveFriendship(friendship)) {
				return ClientMessageUtil.FRIENDSHIP_APPROVED;
			}
			return ClientMessageUtil.SOMETHING_WRONG;
		}
		return ClientMessageUtil.NOT_LOGGED_IN;
	}

	@Override
	@PostMapping("delete-friendship")
	public @ResponseBody Object deleteFriendship(@RequestBody Friendship friendship, HttpServletRequest request) {
		Cat loggedCat = (Cat) request.getSession().getAttribute("loggedCat");
		if (loggedCat.equals(friendship.getCatA()) || loggedCat.equals(friendship.getCatB())) {
			if(friendshipService.deleteFriendship(friendship)) {
				return ClientMessageUtil.FRIENDSHIP_DELETED;
			}
			return ClientMessageUtil.SOMETHING_WRONG;
		}
		return ClientMessageUtil.NOT_LOGGED_IN;
	}

	@Override
	public boolean isFriends(Cat catA, Cat catB, HttpServletRequest request) {
		// TODO Auto-generated method stub
		return false;
	}
}
