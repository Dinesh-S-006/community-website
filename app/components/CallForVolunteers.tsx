export default function CallForVolunteers() {
    return (
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRlbtegrypHBHw8sHVy_FEcIYLGBo6i5ZETeLxY6NFfSnYjw/viewform">
        <div className="md:col-span-1 md:row-span-2 rounded-bento p-8 border border-dark-border bento-card flex flex-col relative overflow-hidden group" style={{ background: 'var(--gradient-card)' }}>
            <div className='relative z-20'>

                <p className='text-3xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight'>
                    Volunteer at D3!! 
                </p>
                <p className='text-3xl md:text-2xl font-extrabold leading-tight mb-6 tracking-tight text-gradient'>
                    D3 Community is looking for volunteers!!
                </p>

                <p className='text-lg text-dark-muted mb-8 max-w-md leading-relaxed'>
                    Would you like to be a volunteer at our meetups?
                    <br />
                    Let us know with this form.
                </p>

            </div>
        </div>
        </a>
    );
}