# selenium-pack
Init-like script for selenium with server jar

## Installation

```
$ sudo npm install selenium-pack -g
```

> **Current Release**
>
> v0.2.0 is here! See the _release notes_ below.

## Versioning

```
X.Y.Z-SELENIUM_SERVER_VERSION

e.g. 0.0.1-2.46.0 contains selenium server version 2.46.0


```

## Usage

Starting selenium server:

```

$ selenium start

```

Stopping selenium server:

```

$ selenium stop

```

Showing the version of included selenium standalone server:

```

$ selenium version

```

## NPM Versions

<strong>Selenium Server v2.47.1</strong>
<ul>
  <li>0.3.0-2.47.1</li>
  <li>0.2.0-2.47.1</li>
</ul>

<strong>Selenium Server v2.46.0</strong>
<ul>
  <li>0.3.0-2.46.0</li>
  <li>0.2.0-2.46.0</li>
  <li>0.1.0-2.46.0</li>
</ul>


## Release Notes

<strong>v0.3.0</strong>
<ul>
  <li>Added command to show the version of included selenium standalone server</li>
  <li>Added lib.init to handle start, stop, and clear</li>
</ul>

<strong>v0.2.0</strong>
<ul>
  <li>Fixed: unable to stop server after running start twice</li>
  <li>Added library to handle selenium jar & pid</li>
</ul>

<strong>v0.1.0</strong>
<ul>
  <li>Added functionality to stop server.</li>
</ul>
