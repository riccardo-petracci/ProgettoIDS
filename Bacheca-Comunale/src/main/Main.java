package main;

import com.sun.net.httpserver.HttpServer;

import java.io.OutputStream;
import java.net.InetSocketAddress;
import controller.Server;

public class Main {

	public static void main(String args[])
	 {
		
	  try
	  {
	  
	   Server srv = new Server(HttpServer.create(new InetSocketAddress("127.0.0.1",8080), 0));
	   srv.init();
	   srv.gertServer().start();

	   
	  }
	  catch (Throwable tr)
	  {
	   tr.printStackTrace();
	  }
	 }

}
