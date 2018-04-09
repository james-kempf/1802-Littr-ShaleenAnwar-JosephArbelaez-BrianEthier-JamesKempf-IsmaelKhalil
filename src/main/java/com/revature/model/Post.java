package com.revature.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
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
	
	@ManyToOne
	@JoinColumn(name="C_ID")
	private Cat poster;

	@Column(name="P_TIME_POSTED")
	private Timestamp timePosted;

	@OneToOne
	@JoinColumn(name="I_ID")
	private Image image;
	
	@Column(name="P_TEXT")
	private String text;
	
	public Post() {}

	public Post(int id, Cat poster, Timestamp timePosted, Image image, String text) {
		super();
		this.id = id;
		this.poster = poster;
		this.timePosted = timePosted;
		this.image = image;
		this.text = text;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Cat getPoster() {
		return poster;
	}

	public void setPoster(Cat poster) {
		this.poster = poster;
	}

	public Timestamp getTimePosted() {
		return timePosted;
	}

	public void setTimePosted(Timestamp timePosted) {
		this.timePosted = timePosted;
	}

	public Image getImage() {
		return image;
	}

	public void setImage(Image image) {
		this.image = image;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((image == null) ? 0 : image.hashCode());
		result = prime * result + ((poster == null) ? 0 : poster.hashCode());
		result = prime * result + ((text == null) ? 0 : text.hashCode());
		result = prime * result + ((timePosted == null) ? 0 : timePosted.hashCode());
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
		if (id != other.id)
			return false;
		if (image == null) {
			if (other.image != null)
				return false;
		} else if (!image.equals(other.image))
			return false;
		if (poster == null) {
			if (other.poster != null)
				return false;
		} else if (!poster.equals(other.poster))
			return false;
		if (text == null) {
			if (other.text != null)
				return false;
		} else if (!text.equals(other.text))
			return false;
		if (timePosted == null) {
			if (other.timePosted != null)
				return false;
		} else if (!timePosted.equals(other.timePosted))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Post [id=" + id + ", poster=" + poster + ", timePosted=" + timePosted + ", image=" + image + ", text="
				+ text + "]";
	}
}
