import React from "react";

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
        aliquam sequi nulla dolores quis unde officia nisi perferendis
        voluptatibus facilis eum sunt molestiae, beatae maxime, quas, tenetur
        dolorum ad sit nihil delectus voluptatem minus soluta quo. Non ad
        officiis enim, provident quidem totam praesentium atque voluptatibus,
        est illum voluptatem consectetur assumenda odio ipsa fuga, eligendi
        repellendus nam facilis quisquam itaque libero ab ipsam corrupti rem.
        Cupiditate ut dolorem labore aliquid distinctio, provident optio eius
        consequatur quasi magni doloremque nihil tenetur nulla at rerum sint,
        cumque quas dolorum est cum officiis voluptates totam! Alias cumque fuga
        veniam fugiat, illum blanditiis error soluta perferendis nam culpa sint
        pariatur cupiditate corporis est eum at cum aliquam incidunt maiores
        repudiandae in maxime eveniet dolores beatae? Voluptate dolorem ex
        officia nemo facere provident iste reprehenderit repudiandae accusantium
        nulla, cupiditate aliquid eum obcaecati autem! Incidunt reiciendis nihil
        vero adipisci odio natus facilis sunt aut laudantium, sit, dolorum ipsam
        fugiat deserunt tempora nisi quas recusandae eligendi obcaecati.
        Architecto temporibus eum dicta quidem nam maxime fuga alias dolorum
        facere incidunt nihil voluptates eius aut quos magni exercitationem,
        porro est molestias adipisci assumenda maiores quibusdam laborum illo
        aliquam? Inventore mollitia reiciendis saepe fuga dolorem modi
        voluptatibus repellat animi vitae?
      </p>
      {params.id} is
    </div>
  );
}

export default page;
