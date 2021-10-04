"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const Routes = require("./routes/routes");
require("dotenv").config();
