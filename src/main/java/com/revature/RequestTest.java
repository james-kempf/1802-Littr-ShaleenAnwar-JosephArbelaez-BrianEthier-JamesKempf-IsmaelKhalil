package com.revature;

import org.apache.log4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.service.CatService;

public class RequestTest {
	
	private static Logger logger = Logger.getLogger(RequestTest.class);

	public static void main(String[] args) {
		ApplicationContext applicationContext 
		= new ClassPathXmlApplicationContext("applicationContext.xml");

		CatService catService = applicationContext.getBean("catService", CatService.class);
		
		logger.info(catService.findAllCats());
	}
}
