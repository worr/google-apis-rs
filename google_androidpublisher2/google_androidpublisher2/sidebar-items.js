initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"struct":[["AndroidPublisher","Central instance to access all AndroidPublisher related resource activities"],["Apk","There is no detailed description."],["ApkBinary","Represents the binary payload of an APK."],["ApkListing","There is no detailed description."],["ApkListingsListResponse","There is no detailed description."],["ApksAddExternallyHostedRequest","There is no detailed description."],["ApksAddExternallyHostedResponse","There is no detailed description."],["ApksListResponse","There is no detailed description."],["AppDetails","There is no detailed description."],["AppEdit","Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["EditApkAddexternallyhostedCall","Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain."],["EditApkListCall","A builder for the *apks.list* method supported by a *edit* resource. It is not used directly, but through a `EditMethods` instance."],["EditApkUploadCall","A builder for the *apks.upload* method supported by a *edit* resource. It is not used directly, but through a `EditMethods` instance."],["EditApklistingDeleteCall","Deletes the APK-specific localized listing for a specified APK and language code."],["EditApklistingDeleteallCall","Deletes all the APK-specific localized listings for a specified APK."],["EditApklistingGetCall","Fetches the APK-specific localized listing for a specified APK and language code."],["EditApklistingListCall","Lists all the APK-specific localized listings for a specified APK."],["EditApklistingPatchCall","Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics."],["EditApklistingUpdateCall","Updates or creates the APK-specific localized listing for a specified APK and language code."],["EditCommitCall","Commits/applies the changes made in this edit back to the app."],["EditDeleteCall","Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit."],["EditDetailGetCall","Fetches app details for this edit. This includes the default language and developer support contact information."],["EditDetailPatchCall","Updates app details for this edit. This method supports patch semantics."],["EditDetailUpdateCall","Updates app details for this edit."],["EditExpansionfileGetCall","Fetches the Expansion File configuration for the APK specified."],["EditExpansionfilePatchCall","Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics."],["EditExpansionfileUpdateCall","Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method."],["EditExpansionfileUploadCall","Uploads and attaches a new Expansion File to the APK specified."],["EditGetCall","Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired)."],["EditImageDeleteCall","Deletes the image (specified by id) from the edit."],["EditImageDeleteallCall","Deletes all images for the specified language and image type."],["EditImageListCall","Lists all images for the specified language and image type."],["EditImageUploadCall","Uploads a new image and adds it to the list of images for the specified language and image type."],["EditInsertCall","Creates a new edit for an app, populated with the app's current state."],["EditListingDeleteCall","Deletes the specified localized store listing from an edit."],["EditListingDeleteallCall","Deletes all localized listings from an edit."],["EditListingGetCall","Fetches information about a localized store listing."],["EditListingListCall","Returns all of the localized store listings attached to this edit."],["EditListingPatchCall","Creates or updates a localized store listing. This method supports patch semantics."],["EditListingUpdateCall","Creates or updates a localized store listing."],["EditMethods","A builder providing access to all methods supported on *edit* resources. It is not used directly, but through the `AndroidPublisher` hub."],["EditTesterGetCall","A builder for the *testers.get* method supported by a *edit* resource. It is not used directly, but through a `EditMethods` instance."],["EditTesterPatchCall","A builder for the *testers.patch* method supported by a *edit* resource. It is not used directly, but through a `EditMethods` instance."],["EditTesterUpdateCall","A builder for the *testers.update* method supported by a *edit* resource. It is not used directly, but through a `EditMethods` instance."],["EditTrackGetCall","Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track."],["EditTrackListCall","Lists all the track configurations for this edit."],["EditTrackPatchCall","Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume. This method supports patch semantics."],["EditTrackUpdateCall","Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume."],["EditValidateCall","Checks that the edit can be successfully committed. The edit's changes are not applied to the live app."],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["ExpansionFile","There is no detailed description."],["ExpansionFilesUploadResponse","There is no detailed description."],["ExternallyHostedApk","Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel"],["ExternallyHostedApkUsesPermission","A permission used by this APK."],["Image","There is no detailed description."],["ImagesDeleteAllResponse","There is no detailed description."],["ImagesListResponse","There is no detailed description."],["ImagesUploadResponse","There is no detailed description."],["InAppProduct","There is no detailed description."],["InAppProductListing","There is no detailed description."],["InappproductBatchCall","A builder for the *batch* method supported by a *inappproduct* resource. It is not used directly, but through a `InappproductMethods` instance."],["InappproductDeleteCall","Delete an in-app product for an app."],["InappproductGetCall","Returns information about the in-app product specified."],["InappproductInsertCall","Creates a new in-app product for an app."],["InappproductListCall","List all the in-app products for an Android app, both subscriptions and managed in-app products.."],["InappproductMethods","A builder providing access to all methods supported on *inappproduct* resources. It is not used directly, but through the `AndroidPublisher` hub."],["InappproductPatchCall","Updates the details of an in-app product. This method supports patch semantics."],["InappproductUpdateCall","Updates the details of an in-app product."],["InappproductsBatchRequest","There is no detailed description."],["InappproductsBatchRequestEntry","There is no detailed description."],["InappproductsBatchResponse","There is no detailed description."],["InappproductsBatchResponseEntry","There is no detailed description."],["InappproductsInsertRequest","There is no detailed description."],["InappproductsInsertResponse","There is no detailed description."],["InappproductsListResponse","There is no detailed description."],["InappproductsUpdateRequest","There is no detailed description."],["InappproductsUpdateResponse","There is no detailed description."],["Listing","There is no detailed description."],["ListingsListResponse","There is no detailed description."],["MethodInfo","Contains information about an API request."],["MonthDay","There is no detailed description."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["PageInfo","There is no detailed description."],["Price","There is no detailed description."],["ProductPurchase","A ProductPurchase resource indicates the status of a user's inapp product purchase."],["PurchaseMethods","A builder providing access to all methods supported on *purchase* resources. It is not used directly, but through the `AndroidPublisher` hub."],["PurchaseProductGetCall","Checks the purchase and consumption status of an inapp item."],["PurchaseSubscriptionCancelCall","Cancels a user's subscription purchase. The subscription remains valid until its expiration time."],["PurchaseSubscriptionDeferCall","Defers a user's subscription purchase until a specified future expiration time."],["PurchaseSubscriptionGetCall","Checks whether a user's subscription purchase is valid and returns its expiry time."],["PurchaseSubscriptionRefundCall","Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur."],["PurchaseSubscriptionRevokeCall","Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring."],["Season","There is no detailed description."],["SubscriptionDeferralInfo","A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time."],["SubscriptionPurchase","A SubscriptionPurchase resource indicates the status of a user's subscription purchase."],["SubscriptionPurchasesDeferRequest","There is no detailed description."],["SubscriptionPurchasesDeferResponse","There is no detailed description."],["Testers","There is no detailed description."],["TokenPagination","There is no detailed description."],["Track","There is no detailed description."],["TracksListResponse","There is no detailed description."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"type":[["Result","A universal result type used as return for all calls."]]});