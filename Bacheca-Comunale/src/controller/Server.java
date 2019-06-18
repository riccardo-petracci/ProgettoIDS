package controller;

import java.io.OutputStream;
import java.net.Socket;
import com.sun.net.httpserver.HttpServer;


public class Server {

private HttpServer server;


public Server(HttpServer server)
{
	this.server=server;
}

public void init() {
	
		server.createContext("/", httpExchange ->{
	    byte response[]="Benvenuto nella bacheca comunale".getBytes("UTF-8");

	    httpExchange.getResponseHeaders().add("Content-Type", "text/plain; charset=UTF-8");
	    httpExchange.sendResponseHeaders(200, response.length);

	    OutputStream out=httpExchange.getResponseBody();
	    out.write(response);
	    out.close();
	   });
}


public HttpServer gertServer(){
	return server;
	}
}