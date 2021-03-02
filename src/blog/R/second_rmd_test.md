---
title: 'The Dating Game'
author: 'Zach Ingbretsen'
date: '2021-03-01'
path: '/blog/second-rmd-test'
output:
  md_document:
    variant: markdown_strict
    preserve_yaml: true
    dev: 'jpeg'
    df_print: 'tibble'
---

import { Link } from "gatsby";

<Link to="/blog/">A link</Link>

## Heading

Dating is hard. `lubridate` can help

    library(tibble)
    library(dplyr)
    library(lubridate)
    library(readr)

We can read in a dataset directly from data.gov

    asdf <- read_csv("https://data.ny.gov/api/views/4a2x-yp8g/rows.csv?accessType=DOWNLOAD")

    ##
    ## ── Column specification ────────────────────────────────────────────────────────
    ## cols(
    ##   .default = col_character(),
    ##   `Project ZIP` = col_double(),
    ##   `Total Project Cost` = col_double(),
    ##   `Number Of Units` = col_double(),
    ##   `Estimated Annual kWh Savings` = col_double(),
    ##   `Estimated Annual MMBtu Savings` = col_double(),
    ##   `First Year Modeled Project Energy Savings $ Estimate` = col_double()
    ## )
    ## ℹ Use `spec()` for the full column specifications.

Note how the `Reporting Period` is a `<chr>` and not a `<date>`.

    asdf

    ## # A tibble: 25,479 x 20
    ##    `Reporting Peri… `Project ID` `Project County` `Project City` `Project ZIP`
    ##    <chr>            <chr>        <chr>            <chr>                  <dbl>
    ##  1 01/30/2021       319939       Niagara          Sanborn                14132
    ##  2 01/30/2021       322614       Orleans          Holley                 14470
    ##  3 01/30/2021       344872       Oneida           Rome                   13440
    ##  4 01/30/2021       344879       Oneida           Rome                   13440
    ##  5 01/30/2021       320335       Orleans          Kent                   14477
    ##  6 01/30/2021       352253       Onondaga         Delphi                 13051
    ##  7 01/30/2021       343469       Suffolk          Ridge                  11961
    ##  8 01/30/2021       345158       Oneida           Rome                   13440
    ##  9 01/30/2021       333868       Oneida           Verona                 13478
    ## 10 01/30/2021       351440       Kings            Brooklyn               11210
    ## # … with 25,469 more rows, and 15 more variables: `Gas Utility` <chr>,
    ## #   `Electric Utility` <chr>, `Project Completion Date` <chr>, `Total Project
    ## #   Cost` <dbl>, `Pre-Retrofit Home Heating Fuel Type` <chr>, `Year Home
    ## #   Built` <chr>, `Size Of Home` <chr>, `Number Of Units` <dbl>, `Job
    ## #   Type` <chr>, `Type Of Dwelling` <chr>, `Measure Type` <chr>, `Estimated
    ## #   Annual kWh Savings` <dbl>, `Estimated Annual MMBtu Savings` <dbl>, `First
    ## #   Year Modeled Project Energy Savings $ Estimate` <dbl>, `Location 1` <chr>

We can convert the date column to an actual date.

    asdf$date <- lubridate::as_date(asdf$`Reporting Period`, format="%m/%d/%Y")

Now we have an actual date.

    asdf %>% select(`Reporting Period`, date, everything())

    ## # A tibble: 25,479 x 21
    ##    `Reporting Peri… date       `Project ID` `Project County` `Project City`
    ##    <chr>            <date>     <chr>        <chr>            <chr>
    ##  1 01/30/2021       2021-01-30 319939       Niagara          Sanborn
    ##  2 01/30/2021       2021-01-30 322614       Orleans          Holley
    ##  3 01/30/2021       2021-01-30 344872       Oneida           Rome
    ##  4 01/30/2021       2021-01-30 344879       Oneida           Rome
    ##  5 01/30/2021       2021-01-30 320335       Orleans          Kent
    ##  6 01/30/2021       2021-01-30 352253       Onondaga         Delphi
    ##  7 01/30/2021       2021-01-30 343469       Suffolk          Ridge
    ##  8 01/30/2021       2021-01-30 345158       Oneida           Rome
    ##  9 01/30/2021       2021-01-30 333868       Oneida           Verona
    ## 10 01/30/2021       2021-01-30 351440       Kings            Brooklyn
    ## # … with 25,469 more rows, and 16 more variables: `Project ZIP` <dbl>, `Gas
    ## #   Utility` <chr>, `Electric Utility` <chr>, `Project Completion Date` <chr>,
    ## #   `Total Project Cost` <dbl>, `Pre-Retrofit Home Heating Fuel Type` <chr>,
    ## #   `Year Home Built` <chr>, `Size Of Home` <chr>, `Number Of Units` <dbl>,
    ## #   `Job Type` <chr>, `Type Of Dwelling` <chr>, `Measure Type` <chr>,
    ## #   `Estimated Annual kWh Savings` <dbl>, `Estimated Annual MMBtu
    ## #   Savings` <dbl>, `First Year Modeled Project Energy Savings $
    ## #   Estimate` <dbl>, `Location 1` <chr>
