initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["BatchReport","Contains single batchReport resource."],["BatchReportDefinition","Contains single batchReportDefinition resource."],["BatchReportDefinitionList","A paginated list of batchReportDefinition resources returned in response to a youtubeAnalytics.batchReportDefinitions.list request."],["BatchReportDefinitionListCall","Retrieves a list of available batch report definitions."],["BatchReportDefinitionMethods","A builder providing access to all methods supported on *batchReportDefinition* resources. It is not used directly, but through the `YouTubeAnalytics` hub."],["BatchReportList","A paginated list of batchReport resources returned in response to a youtubeAnalytics.batchReport.list request."],["BatchReportListCall","Retrieves a list of processed batch reports."],["BatchReportMethods","A builder providing access to all methods supported on *batchReport* resources. It is not used directly, but through the `YouTubeAnalytics` hub."],["BatchReportOutputs","Report outputs."],["BatchReportTimeSpan","Period included in the report. For reports containing all entities endTime is not set. Both startTime and endTime are inclusive."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["Group","There is no detailed description."],["GroupContentDetails","There is no detailed description."],["GroupDeleteCall","Deletes a group."],["GroupInsertCall","Creates a group."],["GroupItem","There is no detailed description."],["GroupItemDeleteCall","Removes an item from a group."],["GroupItemInsertCall","Creates a group item."],["GroupItemListCall","Returns a collection of group items that match the API request parameters."],["GroupItemListResponse","A paginated list of grouList resources returned in response to a youtubeAnalytics.groupApi.list request."],["GroupItemMethods","A builder providing access to all methods supported on *groupItem* resources. It is not used directly, but through the `YouTubeAnalytics` hub."],["GroupItemResource","There is no detailed description."],["GroupListCall","Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs."],["GroupListResponse","A paginated list of grouList resources returned in response to a youtubeAnalytics.groupApi.list request."],["GroupMethods","A builder providing access to all methods supported on *group* resources. It is not used directly, but through the `YouTubeAnalytics` hub."],["GroupSnippet","There is no detailed description."],["GroupUpdateCall","Modifies a group. For example, you could change a group's title."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["ReportMethods","A builder providing access to all methods supported on *report* resources. It is not used directly, but through the `YouTubeAnalytics` hub."],["ReportQueryCall","Retrieve your YouTube Analytics reports."],["ResultTable","Contains a single result table. The table is returned as an array of rows that contain the values for the cells of the table. Depending on the metric or dimension, the cell can contain a string (video ID, country code) or a number (number of views or number of likes)."],["ResultTableColumnHeaders","This value specifies information about the data returned in the rows fields. Each item in the columnHeaders list identifies a field returned in the rows value, which contains a list of comma-delimited data. The columnHeaders list will begin with the dimensions specified in the API request, which will be followed by the metrics specified in the API request. The order of both dimensions and metrics will match the ordering in the API request. For example, if the API request contains the parameters dimensions=ageGroup,gender&metrics=viewerPercentage, the API response will return columns in this order: ageGroup,gender,viewerPercentage."],["YouTubeAnalytics","Central instance to access all YouTubeAnalytics related resource activities"]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"type":[["Result","A universal result type used as return for all calls."]]});