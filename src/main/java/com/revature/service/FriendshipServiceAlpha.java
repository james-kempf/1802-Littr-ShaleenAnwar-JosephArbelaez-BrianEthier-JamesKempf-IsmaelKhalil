package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Cat;
import com.revature.model.Friendship;
import com.revature.repository.FriendshipRepository;

@Service("friendshipService")
public class FriendshipServiceAlpha implements FriendshipService {
	
	@Autowired
	FriendshipRepository friendshipRepository;
	
	@Override
	public List<Friendship> findAllFriendships(Cat cat) {
		return friendshipRepository.findAllFriendships(cat);
	}

	@Override
	public List<Cat> findAllFriends(Cat cat) {
		return friendshipRepository.findAllFriends(cat);
	}

	@Override
	public boolean approveFriendship(Friendship friendship) {
		if (friendship.getStatus().getId() != 1) {
			return false;
		} else {
			return friendshipRepository.approveFriendship(friendship);
		}
	}
	
	@Override
	public boolean deleteFriendship(Friendship friendship) {
		return friendshipRepository.deleteFriendship(friendship);
	}
}
