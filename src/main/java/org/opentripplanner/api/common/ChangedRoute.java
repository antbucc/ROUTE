package org.opentripplanner.api.common;

public class ChangedRoute {
	private String feedId;
    private String routeId;
    public String getRouteId() {
		return routeId;
	}



	public void setRouteId(String routeId) {
		this.routeId = routeId;
	}



	public String getStartDate() {
		return startDate;
	}



	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}



	public String getEndDate() {
		return endDate;
	}



	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}



	private String startDate;
    private String endDate;
  
 
  
    public ChangedRoute() {
       
    }



	public String getFeedId() {
		return feedId;
	}



	public void setFeedId(String feedId) {
		this.feedId = feedId;
	}
}