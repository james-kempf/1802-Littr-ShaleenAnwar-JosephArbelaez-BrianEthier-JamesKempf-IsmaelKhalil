package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name="CAT")
public class Cat {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator ="catSequence")
	@SequenceGenerator(name="catSequence", sequenceName="CAT_SEQ")
	@Column(name="C_ID")
	private int id;

	@Column(name="C_USERNAME")
	private String username;

	@Column(name="C_PASSWORD")
	private String password;

	@Column(name="C_CAT_NAME")
	private String catName;

	@Column(name="C_EMAIL")
	private String email;

	@Column(name="C_BIO")
	private String bio;

	@OneToOne
	@JoinColumn(name="C_PROFILE_PIC")
	private Image profilePic;
	
	public Cat() {}
	
	public Cat(String username, String password, String catName, String email, String bio, Image profilePic) {
		this.username = username;
		this.password = password;
		this.catName = catName;
		this.email = email;
		this.bio = bio;
		this.profilePic = profilePic;
	}

	public Cat(int id, String username, String password, String catName, String email, String bio, Image profilePic) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.catName = catName;
		this.email = email;
		this.bio = bio;
		this.profilePic = profilePic;
	}
	
	public Cat(String username, String password) {
		this.username = username;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCatName() {
		return catName;
	}

	public void setCatName(String catName) {
		this.catName = catName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public Image getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(Image profilePic) {
		this.profilePic = profilePic;
	}

	@Override
	public String toString() {
		return "Cat [id=" + id + ", username=" + username + ", password=" + password + ", catName=" + catName
				+ ", email=" + email + ", bio=" + bio + ", profilePic=" + profilePic + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((bio == null) ? 0 : bio.hashCode());
		result = prime * result + ((catName == null) ? 0 : catName.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + id;
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((profilePic == null) ? 0 : profilePic.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
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
		Cat other = (Cat) obj;
		if (bio == null) {
			if (other.bio != null)
				return false;
		} else if (!bio.equals(other.bio))
			return false;
		if (catName == null) {
			if (other.catName != null)
				return false;
		} else if (!catName.equals(other.catName))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (id != other.id)
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (profilePic == null) {
			if (other.profilePic != null)
				return false;
		} else if (!profilePic.equals(other.profilePic))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
}