package com.revature.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="POST")
public class Post {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator ="postSequence")
	@SequenceGenerator(name="postSequence", sequenceName="POST_SEQ")
	@Column(name="P_ID")
	private int id;

	@Column(name="P_TIME_POSTED")
	private Timestamp timePosted;

	@Column(name="P_USER_ID")
	private int userId;

	@Column(name="P_IMAGE_POSTED")
	private Image image;

	@Column(name="P_LIKES")
	private int likes;

	@Column(name="P_DISLIKES")
	private int dislikes;
	
	public Post() {}

	public Post(int id, Timestamp timePosted, int userId, Image image, int likes, int dislikes) {
		super();
		this.id = id;
		this.timePosted = timePosted;
		this.userId = userId;
		this.image = image;
		this.likes = likes;
		this.dislikes = dislikes;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Timestamp getTimePosted() {
		return timePosted;
	}

	public void setTimePosted(Timestamp timePosted) {
		this.timePosted = timePosted;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public Image getImage() {
		return image;
	}

	public void setImage(Image image) {
		this.image = image;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public int getDislikes() {
		return dislikes;
	}

	public void setDislikes(int dislikes) {
		this.dislikes = dislikes;
	}

	@Override
	public String toString() {
		return "Post [id=" + id + ", timePosted=" + timePosted + ", userId=" + userId + ", image=" + image + ", likes="
				+ likes + ", dislikes=" + dislikes + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + dislikes;
		result = prime * result + id;
		result = prime * result + ((image == null) ? 0 : image.hashCode());
		result = prime * result + likes;
		result = prime * result + ((timePosted == null) ? 0 : timePosted.hashCode());
		result = prime * result + userId;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Post other = (Post) obj;
		if (dislikes != other.dislikes)
			return false;
		if (id != other.id)
			return false;
		if (image == null) {
			if (other.image != null)
				return false;
		} else if (!image.equals(other.image))
			return false;
		if (likes != other.likes)
			return false;
		if (timePosted == null) {
			if (other.timePosted != null)
				return false;
		} else if (!timePosted.equals(other.timePosted))
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}
	
	
	
	
	
}
