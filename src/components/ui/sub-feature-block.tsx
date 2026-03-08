const SubFeatureBlock = ({ children, title }) =>      {
  return (
       <section className="py-12 bg-muted mt-12">
         
         <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
                 <h3 className="text-2xl font-light text-architectural mb-8">
                  {title}
                 </h3>
                 <div>
                     {children}
                 </div>
           </div>
         </div>
       </section>
  );
}

export default SubFeatureBlock;