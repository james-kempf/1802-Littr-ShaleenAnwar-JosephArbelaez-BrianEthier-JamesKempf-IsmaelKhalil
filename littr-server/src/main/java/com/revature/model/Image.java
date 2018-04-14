package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="IMAGE")
public class Image {
	
	@Id
	@Column(name="I_ID")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator ="imageSequence")
	@SequenceGenerator(name="imageSequence", sequenceName="IMAGE_SEQ")
	private int id;

	@Column(name="I_IMAGE_URL")
	private String imgURL;
	
    @ManyToOne
    @JoinColumn(name = "C_ID")
	private Cat cat;
	
	public Image() {}

	public int getId() {
		return id;
	}

	public Image(int id, String imgName) {
		super();
		this.id = id;
		this.imgURL = imgName;
	}

	public Image(int id, String imgName, Cat cat){
		super();
		this.id = id;
		this.imgURL = imgName;
		this.cat = cat;
	}
	
	public Image(String imgURL, Cat cat){
		super();
		this.imgURL = imgURL;
		this.cat = cat;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getImgURL() {
		return imgURL;
	}

	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}

	public Cat getCat() {
		return cat;
	}

	public void setCat(Cat cat) {
		this.cat = cat;
	}

	@Override
	public String toString() {
		return "Image [id=" + id + ", imgName=" + imgURL + ", cat=" + cat + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cat == null) ? 0 : cat.hashCode());
		result = prime * result + id;
		result = prime * result + ((imgURL == null) ? 0 : imgURL.hashCode());
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
		if (cat == null) {
			if (other.cat != null)
				return false;
		} else if (!cat.equals(other.cat))
			return false;
		if (id != other.id)
			return false;
		if (imgURL == null) {
			if (other.imgURL != null)
				return false;
		} else if (!imgURL.equals(other.imgURL))
			return false;
		return true;
	}


}