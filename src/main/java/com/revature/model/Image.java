package com.revature.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

public class Image {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator ="imageSequence")
	@SequenceGenerator(name="imageSequence", sequenceName="IMAGE_SEQ")
	@Column(name="I_ID")
	private int id;

	@Column(name="I_USER_ID")
	private int userId;

	@Column(name="I_IMAGE_URL")
	private String imgURL;
	
	public Image() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getImgURL() {
		return imgURL;
	}

	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}

	@Override
	public String toString() {
		return "Image [id=" + id + ", userId=" + userId + ", imgURL=" + imgURL + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((imgURL == null) ? 0 : imgURL.hashCode());
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
		Image other = (Image) obj;
		if (id != other.id)
			return false;
		if (imgURL == null) {
			if (other.imgURL != null)
				return false;
		} else if (!imgURL.equals(other.imgURL))
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}
	
	
	
}
