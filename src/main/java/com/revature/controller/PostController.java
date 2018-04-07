package com.revature.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.revature.model.Cat;
import com.revature.model.Post;

public interface PostController {

	public List<Post> findPostsByCat(Cat cat, HttpServletRequest request);
}
