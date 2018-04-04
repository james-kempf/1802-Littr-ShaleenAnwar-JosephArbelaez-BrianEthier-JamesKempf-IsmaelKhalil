package com.revature.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="FRIENDSHIP")
public class Friendship {

	@Id
	Cat catA;
	
	@Id
	Cat catB;
	
	@ManyToOne
	FriendStatus status;
	
	Timestamp time;
}
