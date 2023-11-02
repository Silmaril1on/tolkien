import React from "react";
import Video from "./Video";
import EntryContent from "./EntryContent";
import ShadowContent from "./ShadowContent";
import LightSmoke from "../../../components/LightSmoke";

function Entry() {
  return (
    <main
      id="entry"
      className="w-full of-h entry-container pos-r column-c mt-n2 h-full"
    >
      <LightSmoke />
      <section className="responsive-column-c pos-r z-2 mt-5 w-full">
        <Video />
        <EntryContent />
      </section>
      <ShadowContent />
    </main>
  );
}

export default Entry;
