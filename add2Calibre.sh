#!/bin/bash
_base="./calibre_tmp/mobi"
_dfiles="${_base}/*.mobi"

for f in $_dfiles
do
    # add to calibre
    # `calibredb add --library-path=~/mycalibre_lib/db ${f}`
    # convert to epub
    epubName=`echo ${f} | sed 's/mobi/epub/'`  # update signature
    echo ${f}
    echo ${epubName}
    # `ebook-convert "$f" "${epubName}"`
    # rm -f ${f} ${epubName}
    # rm -f ${f}
done