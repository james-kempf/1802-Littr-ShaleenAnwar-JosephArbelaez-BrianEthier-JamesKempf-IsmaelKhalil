package com.revature.model;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="FRIENDSHIP")
public class Friendship implements Serializable {
	
	private static final long serialVersionUID = 7781659835982904776L;

	@Id
	@ManyToOne
	@JoinColumn(name = "F_CAT_A")
	Cat catA;
	
	@Id
	@ManyToOne
	@JoinColumn(name = "F_CAT_B")
	Cat catB;
	
	@ManyToOne
	@JoinColumn(name = "FS_ID")
	FriendStatus status;
	
	@Column(name = "F_TIME")
	Timestamp time;
	
	public Friendship() {}

	public Friendship(Cat catA, Cat catB, FriendStatus status, Timestamp time) {
		super();
		this.catA = catA;
		this.catB = catB;
		this.status = status;
		this.time = time;
	}
	
	public Cat getCatA() {
		return catA;
	}

	public void setCatA(Cat catA) {
		this.catA = catA;
	}

	public Cat getCatB() {
		return catB;
	}

	public void setCatB(Cat catB) {
		this.catB = catB;
	}

	public FriendStatus getStatus() {
		return status;
	}

	public void setStatus(FriendStatus status) {
		this.status = status;
	}

	public Timestamp getTime() {
		return time;
	}

	public void setTime(Timestamp time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "Friendship [catA=" + catA + ", catB=" + catB + ", status=" + status + ", time=" + time + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((catA == null) ? 0 : catA.hashCode());
		result = prime * result + ((catB == null) ? 0 : catB.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
		result = prime * result + ((time == null) ? 0 : time.hashCode());
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
		Friendship other = (Friendship) obj;
		if (catA == null) {
			if (other.catA != null)
				return false;
		} else if (!catA.equals(other.catA))
			return false;
		if (catB == null) {
			if (other.catB != null)
				return false;
		} else if (!catB.equals(other.catB))
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		if (time == null) {
			if (other.time != null)
				return false;
		} else if (!time.equals(other.time))
			return false;
		return true;
	}
}
