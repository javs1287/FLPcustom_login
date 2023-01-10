# Customize SAP Fiori Logon Page

## Description

This repository contains the material for you to customize SAP Fiori Launchpad logon page through classic extensibility.  

## Overview

In this section we will describe the main activities to be run for customizing your SAP Fiori Launchpad logon page in SAP S/4HANA 2020 or higher.

The objective customizing this logon page is for your end-users to perceive a different user experience from the moment they have to logon to the system. The customized logon page will feature an innovative background image, your company logo and easy to read text as shown in the image.

![Customized Logon Page Overview](images/overview.png)

## Prerequisites

You need to ensure the fulfillment of all of the following points for you to successfully run this exercise:

* You have installed the _latest_ ABAP Development Tools (ADT), see [ABAP Development Tools](https://tools.hana.ondemand.com/#abap).
* You have an SAP S/4HANA 2020 or higher system deployed in an on-premise Sandbox or via SAP Cloud Application Library (CAL).
* You have fully configured SAP Fiori and have developer access to the backend system where embedded SAP Fiori is deployed.
* You have access to creation+read access of transport requests in your SAP Backend system for both customizing and workbench requests.
* You have full developer access and are able to create custom classes and upload images into the MIME repository.

## Exercises

Follow these steps to customize your SAP Fiori Launchpad Logon page.
- [Exercise 1 - Basic preparation and uploading images to the MIME Repository](exercises/ex_1/)
- [Exercise 2 - (Optional) Creating a custom BSP for testing](exercises/ex_2/)
- [Exercise 3 - Creating a custom class for redefinition of standard logon class](exercises/ex_3/)
- [Exercise 4 - Creating and calling custom Javascript](exercises/ex_4/)
- [Exercise 5 - Deploying your custom SAP Fiori Launchpad logon page](exercises/ex_5/)


## License
Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](licenses/Apache-2.0.txt) file.
