package com.revature.util;

import java.time.LocalDateTime;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.revature.util.AmazonConnectionUtil;

public class AmazonConnectionUtil {

	public static String ak = "AKIAIKGEIF6TAIFT6I3A";
	public static String sak = "Mbze26YfYyo0A5l25ZhTl0Ex0r0e7jVeaXL8o68E";
	public static AWSCredentials credentials = new BasicAWSCredentials(ak, sak);
	public static String bucket = "revature.1802february.littr";
	public static String fileName = LocalDateTime.now().toString();
	public static String createdlink = "https://s3.amazonaws.com/revature.1802february.littr/" + fileName;
}
